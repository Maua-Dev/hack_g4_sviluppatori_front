require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

function authenticateToken(req, res, next) {
    const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Nenhum token foi inserido!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Este token é inválido!" });
        }
        req.userId = decoded.userId;
        next();
    });
}

app.get("/login", authenticateToken, (req, res) => {
    res.json({ message: "This is a protected route", userId: req.userId });
});

const Produto = mongoose.model("Produto", mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
}));


const Usuario = mongoose.model("Usuario", mongoose.Schema({
    username: { type: String, required: true, unique: true},
    senha: { type: String, required: true },
}).plugin(uniqueValidator));


const Mesa = mongoose.model("Mesa", mongoose.Schema({
    numero: { type: Number, required: true },
    status: { type: String, required: true },
}));

const Pedido = mongoose.model("Pedido", mongoose.Schema({
    mesa: { type: Number, required: true },
    status: { type: String, required: true },
    produtos: { type: Array, required: true },
    preco: { type: Number, required: true },
}));

const Ingredientes = mongoose.model("Ingredientes", mongoose.Schema({
    nome: { type: String, required: true },
    quantidade: { type: String, required: true },
    preco: { type: Number, required: true },
}));

const Financeiro = mongoose.model("Financeiro", mongoose.Schema({
    identificacao: { type: String, required: true },
    quantia: { type: Number, required: true },
    status: { type: String, required: true }
}));



async function conectarAoMongoDB(){
    try{
        mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
    }
    catch(error){
        console.log(error);
    }
}

//Produtos
app.get("/produtos", async (req, res) => {
    try{
        const produtos = await Produto.find();
        res.json(produtos);
    }
    catch(error){
        res.json(error);
    }
});

app.post("/produtos", async (req, res) => {
    try{
        const produto = new Produto(req.body);
        await produto.save();

        const produtos = await Produto.find();
        res.json(produto);
    }
    catch(error){
        res.json(error);
    }
});

//Usuarios
app.post("/signup", async (req, res) => {
    try{
        const username = req.body.username;
        const senha = req.body.senha;
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = new Usuario({
            username: username,
            senha: senhaCriptografada,
        });

        await usuario.save();
        res.status(201).end();
    }
    catch(error){
        res.json(error);
        res.status(409).end();
    }
});

app.post("/login", async (req, res) => {
    const username = req.body.username;
    const senha = req.body.senha;

    const user = await Usuario.findOne({ username: username });

    if(!user){
        res.status(401);
    }
    const compararSenha = await bcrypt.compare(senha, user.senha);

    if(!compararSenha){
        res.status(401);
    }
    
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET,{
        expiresIn: "1h",
    });
    console.log(token)
    res.status(201).end();
});

//Mesa

app.get("/mesas", async (req, res) => {
    try{
        const mesas = await Mesa.find();
        res.json(mesas);
    }
    catch(error){
        res.json(error);
    }
});

app.post("/mesas", async (req, res) => {
    try{
        const mesa = new Mesa(req.body);
        await mesa.save();

        const mesas = await Mesa.find();
        res.json(mesa);
    }
    catch(error){
        res.json(error);
    }
});

//Pedidos

app.get("/pedidos", async (req, res) => {
    try{
        const pedidos = await Pedido.find();
        res.json(pedidos);
    }
    catch(error){
        res.json(error);
    }
});

app.post("/pedidos", async (req, res) => {
    try{
        const pedido = new Pedido(req.body);
        await pedido.save();

        const pedidos = await Pedido.find();
        res.json(pedido);
    }
    catch(error){
        res.json(error);
    }
});

//Ingredientes

app.get("/ingredientes", async (req, res) => {
    try{
        const ingredientes = await Ingredientes.find();
        res.json(ingredientes);
    }
    catch(error){
        res.json(error);
    }
});

app.post("/ingredientes", async (req, res) => {
    try{
        const ingrediente = new Ingredientes(req.body);
        await ingrediente.save();

        const ingredientes = await Ingredientes.find();
        res.json(ingrediente);
    }
    catch(error){
        res.json(error);
    }
});

//Financeiro
app.post("/financeiro", async (req, res) => {
    try{
        const financeiro = new Financeiro(req.body);
        await financeiro.save();

        const financeiros = await Financeiro.find();
        res.json(financeiro);
    }
    catch(error){
        res.json(error);
    }
});

app.get("/financeiro", async (req, res) => {
    try{
        const financeiros = await Financeiro.find();
        res.json(financeiros);
    }
    catch(error){
        res.json(error);
    }
});


app.listen(3001, () => {
    try{
        conectarAoMongoDB();
        console.log("Servidor iniciado!");
    }
    catch(error){
        console.log(error);
    }
});

