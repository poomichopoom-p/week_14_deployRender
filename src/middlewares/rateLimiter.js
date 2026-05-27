import rateLimiter from "express-rate-limiter";

export  const limiter = rateLimiter({
    window: 15 * 60 * 1000,
    max: 100,
    standarHeaders: true,
    legacyHeaders:false,
});
