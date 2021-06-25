// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  setTimeout(() => {
    res.status(200).json([
      { id: "1", name: "thai" },
      { id: "2", name: "thai 2" },
    ]);
  }, 2000);
}
