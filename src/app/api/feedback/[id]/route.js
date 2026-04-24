import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

export async function GET(request, { params }) {
  const { id } = await params;
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Give me corrcet _id",
    });
  }
  const query = { _id: new ObjectId(id) };
  console.log(query);

  const result = await feedbackCollection.findOne(query);
  console.log(result);

  return Response.json(result);
}
export async function DELETE(request, { params }) {
  const { id } = await params;
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Give me corrcet _id",
    });
  }
  const query = { _id: new ObjectId(id) };
  console.log(query);

  const result = await feedbackCollection.deleteOne(query);
  console.log(result);

  return Response.json(result);
}
export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Give me corrcet _id",
    });
  }

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
    });
  }
  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: {
      message,
    },
  };

  const result = await feedbackCollection.updateOne(query, newData);

  return Response.json(result);
}
