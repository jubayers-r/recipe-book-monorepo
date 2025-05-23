import Swal from "sweetalert2";

export const handleLikeAPI = (id, currentLike, email) => {
  if (email) {
    Swal.fire({
      title: "Sorry! You Cannot Like Your Own Post Bruh:)",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
          rgba(0,0,123,0.4)
          url("/nyancat-rainbow-cat.gif")
          left 100px
          no-repeat
        `,
    });
  } else {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ currentLike }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.modifiedCount) {
          return "Updated successfully";
        } else {
          return "Did not update";
        }
      });
    return Promise.resolve("Approved");
  }
};
