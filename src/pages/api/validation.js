export default async function handler(req, res) {
  const { card_id } = req.body;

  const thirdPartyResponse = await fetch("################################", {
    headers: {
      "API-Key": process.env.API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ card_id }),
  });

  if (!thirdPartyResponse.ok) {
    return res.status(400).json({ valid: false });
  }

  res.status(200).json({
    valid: true,
    balance: thirdPartyResponse.balance,
  });
}
