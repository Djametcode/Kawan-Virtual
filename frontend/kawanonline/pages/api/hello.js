export default async function handler(req, res) {
  try {
    if (res.status === 401) {
      res.redirect("/");
    }
    res.redirect("/landing");
  } catch (err) {
    console.log(err);
  }
}
