import crypto from "crypto";

function hashPassword(password) {
  return crypto.createHash("sha256").update(`${password}${process.env.SALT}`).digest("hex");
}

export { hashPassword };
