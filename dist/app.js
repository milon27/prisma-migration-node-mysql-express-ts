"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)({ origin: true }));
app.use(express_1.default.json());
app.get('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma.user.create({
        data: {
            uname: "mioln",
            password: "123"
        }
    });
    res.send(data);
}));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma.post.findMany();
    res.send(data);
}));
app.get('/add/:uid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    if (!uid) {
        res.send("who are you?");
    }
    const newData = {
        title: "new post ",
        content: "new post content",
        userId: parseInt(uid),
        createdAt: new Date()
    };
    yield prisma.post.create({
        data: newData
    });
    res.send({
        port: process.env.PORT
    });
}));
const port = process.env.PORT || 2828;
app.listen(port, () => console.log(`running on ${port}`));
//# sourceMappingURL=app.js.map