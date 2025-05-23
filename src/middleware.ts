import { auth } from "@/app/auth";

export const runtime = "nodejs"; // Force Node.js runtime for Mongoose compatibility

export default auth((req) => {
  //   if (!req.auth && req.nextUrl.pathname !== "/login") {
  if (!req.auth && req.nextUrl.pathname !== "/") {
    // const newUrl = new URL("/login", req.nextUrl.origin)
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
