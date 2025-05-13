import { useState } from "react";
import {
  FiCheck,
  FiToggleRight,
  FiToggleLeft,
  FiHelpCircle,
  FiX,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PlanCard from "../components/ui/PlanCard.jsx";

const Plans = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  // Mock plans data
  const plansData = {
    monthly: [
      {
        id: "basic",
        name: "Basic",
        description: "Perfect for beginners",
        price: 29,
        period: "month",
        features: [
          "Access to 100+ gyms",
          "24/7 gym access",
          "Basic workout plans",
          "Standard equipment access",
          "Mobile app access",
        ],
        notIncluded: [
          "Personal training sessions",
          "Premium classes",
          "Spa access",
          "Guest passes",
        ],
        popular: false,
      },
      {
        id: "premium",
        name: "Premium",
        description: "Most popular choice",
        price: 49,
        period: "month",
        features: [
          "Access to 500+ gyms",
          "24/7 gym access",
          "Advanced workout plans",
          "All equipment access",
          "Mobile app access",
          "2 guest passes per month",
          "Group fitness classes",
          "Basic personal training",
        ],
        notIncluded: ["Unlimited personal training", "Premium spa access"],
        popular: true,
      },
      {
        id: "elite",
        name: "Elite",
        description: "For fitness enthusiasts",
        price: 79,
        period: "month",
        features: [
          "Access to 1000+ gyms",
          "24/7 gym access",
          "Elite workout plans",
          "All equipment access",
          "Mobile app access",
          "Unlimited guest passes",
          "All fitness classes",
          "Weekly personal training",
          "Spa access",
          "Priority booking",
        ],
        notIncluded: [],
        popular: false,
      },
    ],
    yearly: [
      {
        id: "basic",
        name: "Basic",
        description: "Perfect for beginners",
        price: 290,
        period: "year",
        features: [
          "Access to 100+ gyms",
          "24/7 gym access",
          "Basic workout plans",
          "Standard equipment access",
          "Mobile app access",
          "2 months free",
        ],
        notIncluded: [
          "Personal training sessions",
          "Premium classes",
          "Spa access",
          "Guest passes",
        ],
        popular: false,
      },
      {
        id: "premium",
        name: "Premium",
        description: "Most popular choice",
        price: 490,
        period: "year",
        features: [
          "Access to 500+ gyms",
          "24/7 gym access",
          "Advanced workout plans",
          "All equipment access",
          "Mobile app access",
          "2 guest passes per month",
          "Group fitness classes",
          "Basic personal training",
          "2 months free",
        ],
        notIncluded: ["Unlimited personal training", "Premium spa access"],
        popular: true,
      },
      {
        id: "elite",
        name: "Elite",
        description: "For fitness enthusiasts",
        price: 790,
        period: "year",
        features: [
          "Access to 1000+ gyms",
          "24/7 gym access",
          "Elite workout plans",
          "All equipment access",
          "Mobile app access",
          "Unlimited guest passes",
          "All fitness classes",
          "Weekly personal training",
          "Spa access",
          "Priority booking",
          "2 months free",
        ],
        notIncluded: [],
        popular: false,
      },
    ],
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    // Navigate to subscription page with selected plan
    navigate(`/subscription?plan=${planId}&billing=${billingPeriod}`);
  };

  const plans = plansData[billingPeriod];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-600 dark:from-primary-900 dark:to-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Find the perfect membership that fits your fitness goals and
              budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <motion.div
              className="bg-light-card dark:bg-dark-card rounded-full p-1 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === "monthly"
                    ? "bg-primary-600 text-white"
                    : "text-light-textSecondary dark:text-dark-textSecondary"
                }`}
                onClick={() => setBillingPeriod("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === "yearly"
                    ? "bg-primary-600 text-white"
                    : "text-light-textSecondary dark:text-dark-textSecondary"
                }`}
                onClick={() => setBillingPeriod("yearly")}
              >
                Yearly
                <span className="ml-1 text-xs bg-success-500 text-white px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </motion.div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard
                key={plan.id}
                {...plan}
                onSelect={() => handlePlanSelect(plan.id)}
              />
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                Everything you need to know about our membership plans
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "Can I cancel my subscription anytime?",
                  answer:
                    "Yes, you can cancel your subscription at any time. For monthly plans, your access will continue until the end of your current billing period. For yearly plans, you can request a prorated refund.",
                },
                {
                  question: "Are there any hidden fees?",
                  answer:
                    "No, there are no hidden fees. The price you see is the price you pay. We believe in transparent pricing with no surprise charges.",
                },
                {
                  question: "How many gyms can I access?",
                  answer:
                    "The number of accessible gyms depends on your plan. Basic gives you access to 100+ gyms, Premium to 500+ gyms, and Elite to 1000+ gyms across the country.",
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer:
                    "Absolutely! You can upgrade your plan at any time. When upgrading, you'll only pay the difference prorated for the remainder of your billing period.",
                },
                {
                  question: "Can I freeze my membership?",
                  answer:
                    "Yes, you can freeze your membership for up to 3 months per year. A small monthly maintenance fee may apply during the freeze period.",
                },
                {
                  question: "Do I need to bring my own equipment?",
                  answer:
                    "Typically no. Our partner gyms are fully equipped with everything you need for a great workout. However, personal items like workout clothes, shoes, and towels are usually your responsibility.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <FiHelpCircle className="text-primary-600 dark:text-primary-500 mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
