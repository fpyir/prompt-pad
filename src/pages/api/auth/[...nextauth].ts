import NextAuth from "next-auth";
import { AUTH_OPTIONS } from "@/internal/authentication";

export default NextAuth(AUTH_OPTIONS);
