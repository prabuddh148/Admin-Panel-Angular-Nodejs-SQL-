export function sendAuthResponse(res, result) {
    if (result?.data?.access_token) {
        res.cookie("access_token", result.data.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 5 * 60 * 1000,
        });
    }
    if (result?.data?.refresh_token) {
        res.cookie("refresh_token", result.data.refresh_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 10 * 60 * 1000,
        });
    }
    // Remove tokens from response body
    if (result.data) {
        delete result.data.access_token;
        delete result.data.refresh_token;
    }
    return res.status(result.statusCode).json(result);
}
