

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log("id", id);
  return (
    <div>
      ID: 
      {
        id
      }
    </div>
  );
};

export default BookDetailsPage;