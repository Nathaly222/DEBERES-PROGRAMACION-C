import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const employee = await prisma.employee.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      role: 'Manager',
      department: 'Manufacturing',
      hireDate: new Date('2020-01-01'),
      salary: 60000,
    },
  });

  const product = await prisma.product.create({
    data: {
      productName: 'Sample Product',
      category: 'Sample Category',
      price: 19.99,
      stockQuantity: 100,
      releaseDate: new Date('2024-01-01'),
      supplier: 'Sample Supplier',
    },
  });

  await prisma.productionOrder.create({
    data: {
      orderDate: new Date(),
      quantity: 50,
      employeeId: employee.id,
      productId: product.id,
    },
  });

  console.log('Seeding completed.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
