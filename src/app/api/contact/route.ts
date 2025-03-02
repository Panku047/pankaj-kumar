import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";


// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Allow all domains
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET() {
  return NextResponse.json({ message: "API is up!!" }, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const add_date = new Date().toISOString().split("T")[0];
    const { name, email, message } = await req.json();
    const { data, error } = await supabase
      .from("contact")
      .insert([{ name, email, message, add_date }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
    }
    return NextResponse.json({ message: "Data inserted successfully", data }, { status: 201, headers: corsHeaders });
  } catch (error) {
    console.log("Error while inserting data into db",error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500, headers: corsHeaders });
  }
}
