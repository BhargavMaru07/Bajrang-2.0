require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const checkoutSession = async (req, res) => {
  const { cart } = req.body;

  //   console.log(cart);

  const lineItems = cart?.map((cart) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: cart?.name,
          images: [cart?.image],
        },
        unit_amount: cart.price * 100,
      },
      quantity: cart.amount,
    };
  });

  //   console.log(lineItems);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `https://bajrang-2-0.vercel.app/orders`,
    cancel_url: `https://bajrang-2-0.vercel.app/cart`,
  });

  return res.status(200).json({ id: session.id });
};

module.exports = {
  checkoutSession,
};
