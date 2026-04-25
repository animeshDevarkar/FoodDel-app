import jwt from 'jsonwebtoken';

const authMiddleware = async(req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({success:false, message: 'Unauthorized Login' });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body = req.body || {};          // ← fix: ensure body exists
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log("JWT Error:", error.message);
        return res.json({success:false, message: 'Invalid Token' });
    }
}

export default authMiddleware;