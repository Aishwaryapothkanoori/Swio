const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Transaction = require('.Transaction');

exports.createPayment = async (req, res) => {
    const { name, amount } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: 'usd',
        });
        res.json({
            clientSecret: paymentIntent.client_secret,
            name,
            amount,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.saveTransaction = async (req, res) => {
    const { name, amount, transactionId } = req.body;
    try {
        const transaction = new Transaction({ name, amount, transactionId });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
