function showAlert(event) {
    event.preventDefault();
    const course = document.getElementById("courses").value;
    let cost;
    switch (course) {
      case "Introduction to Scratch Programming":
        cost = "$99";
        break;
      case "Java for Beginners":
        cost = "$199";
        break;
      case "Python for Data Science":
        cost = "$299";
        break;
      case "Web Development with HTML, CSS, and JavaScript":
        cost = "$399";
        break;
      default:
        cost = "Unknown";
    }
    alert("Thank You " + pname.value + "! You have selected " + course + " which costs " + cost);
  }
  