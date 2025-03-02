import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  return NextResponse.json({ message: "API is up!!" });
}

export async function POST(req: Request) {
  try {
    const add_date = new Date().toISOString().split("T")[0];
    const { name, email, message } = await req.json();
    const { data, error } = await supabase
      .from("contact")
      .insert([{ name, email, message, add_date }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Data inserted successfully", data }, { status: 201 });
  } catch (error) {
    console.log("Error while inserting data into db",error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
