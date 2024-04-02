"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_js_1 = __importDefault(require("../controller/UserController.js"));
const router = express_1.default.Router();
//To get Lisof Rooms
router.get("/", UserController_js_1.default.getUsers);
//To get a Single Room by ID
router.get("/:id", UserController_js_1.default.getUser);
//To create an Hotel Room
router.post("/", UserController_js_1.default.createUser);
//to signup user
router.post("/signup", UserController_js_1.default.userSignup);
//to login
router.post("/login", UserController_js_1.default.userLogin);
//To update an Hotel Room
router.patch("/:id", UserController_js_1.default.updateUser);
//To delete an Hotel Room
router.delete("/:id", UserController_js_1.default.deleteUser);
exports.default = router;
//# sourceMappingURL=User.route.js.map