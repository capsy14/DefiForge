import { NextResponse } from "next/server";

export default function middleware(req) {
  let registered = req.cookies.get("registered");
  let url = req.url;
  if (!registered && url.includes("/nftlisting")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
