import { NextResponse } from "next/server"
import findPermission from "./findPermission";
import { redirect } from "next/navigation";

export function GET(request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name")

    const accused = findPermission(name)

    if (accused) {
        if (accused.hasPayed) {
            return NextResponse.json({ message: "Pagó" }, { status: 200 })
        }
        else if (accused.expireDate.getTime() < new Date().getTime()) {
            return NextResponse.json({ message: "Shut down" }, { status: 401 })
        }
        else {
            return NextResponse.json({ message: "Hay tiempo aun" }, { status: 201 })
        }
    } else {
        redirect("/")
    }
}