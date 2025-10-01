function status(request, response) {
  response.status(200).json({ msg: "Funfou!" });
}

export default status;
