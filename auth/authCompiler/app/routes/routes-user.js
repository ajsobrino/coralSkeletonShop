"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/user', (req, resp) => {
    resp.json({
        ok: true,
        message: 'Good idea'
    });
});
exports.default = router;
