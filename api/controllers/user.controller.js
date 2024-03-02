export const test = (req, res) => {
  try {
    res.status(200).json({ message: "Test API working" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};