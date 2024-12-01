import { faker } from "@faker-js/faker";
import Customer from "../models/customerModel.js";
import connectDB from "../config/db.js";

const generateFakeCustomers = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();

    console.log("Clearing existing records...");
    await Customer.deleteMany();

    console.log("Generating fake customer data...");
    const customers = [];
    for (let i = 1; i <= 2000000; i++) {
      customers.push({
        s_no: i,
        name_of_customer: faker.person.fullName(),
        email: faker.internet.email(),
        mobile_number: faker.phone.number(),
        dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
        created_at: new Date(),
        modified_at: new Date(),
      });

      // Insert in batches of 10,000 for performance
      if (i % 10000 === 0) {
        await Customer.insertMany(customers);
        console.log(`Inserted ${i} records...`);
        customers.length = 0; // Clear batch array
      }
    }

    console.log("All 2 million records inserted successfully!");
    process.exit();
  } catch (error) {
    console.error("Error generating fake customers:", error);
    process.exit(1);
  }
};

generateFakeCustomers();
