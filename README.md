# MediMeet - Comprehensive Healthcare Platform

<div align="center">
  <img src="/public/logo.png" alt="MediMeet Logo" width="200"/>
  <p><em>Connect with doctors anytime, anywhere</em></p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
</div>

## 🌟 Overview

MediMeet is a modern, full-stack telemedicine platform that bridges the gap between patients and healthcare providers. Built with cutting-edge technologies, it offers secure video consultations, appointment management, and comprehensive healthcare solutions.

**Created by:** [Kartikey Katyal](https://github.com/kartikeykatyal)

## 🏗️ Architecture

### Technology Stack

#### Frontend
- **Next.js 14** - React framework with App Router
- **React 19** - User interface library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icon library

#### Backend
- **Next.js API Routes** - Server-side functionality
- **Prisma ORM** - Database operations and migrations
- **Neon PostgreSQL** - Serverless PostgreSQL database
- **Server Actions** - Type-safe server functions

#### Authentication & Security
- **Clerk** - Complete authentication solution
- **Role-based Access Control** - Multi-role user management
- **HIPAA Compliance Ready** - Healthcare data protection

#### Real-time Communication
- **Vonage Video API** - HD video consultations
- **WebRTC** - Peer-to-peer communication

#### Payment Processing
- **Stripe Integration** - Credit-based payment system
- **Subscription Management** - Flexible pricing tiers

### System Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Next.js App   │    │   Clerk Auth     │    │   Neon DB       │
│   (Frontend)    │◄──►│   (Security)     │    │   (PostgreSQL)  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Vonage API    │    │   Stripe API     │    │   Prisma ORM    │
│   (Video Call)  │    │   (Payments)     │    │   (Database)    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## ✨ Features

### 👥 Multi-Role System
- **Patients**: Browse doctors, book appointments, manage health records
- **Doctors**: Manage availability, conduct consultations, access patient notes
- **Admins**: Platform oversight, doctor verification, analytics

### 🏥 Core Healthcare Features
- **Doctor Discovery**: Browse by specialty, ratings, and availability
- **Smart Scheduling**: Real-time availability management
- **HD Video Consultations**: Secure, HIPAA-compliant video calls
- **Medical Records**: Secure document storage and sharing
- **Prescription Management**: Digital prescription handling
- **Appointment History**: Complete consultation tracking

### 💳 Business Features
- **Credit System**: Flexible payment model
- **Subscription Tiers**: Multiple pricing options
- **Doctor Payouts**: Automated compensation system
- **Analytics Dashboard**: Comprehensive platform insights

### 🔒 Security & Compliance
- **End-to-End Encryption**: Secure data transmission
- **RBAC**: Role-based access control
- **Audit Logging**: Complete action tracking
- **HIPAA Ready**: Healthcare compliance features

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm/pnpm** package manager
- **Git** version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kartikeykatyal/medimeet.git
cd medimeet
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Environment Setup**
```bash
cp .env.example .env.local
```

4. **Configure environment variables** (see Environment Variables section)

5. **Database setup**
```bash
npx prisma generate
npx prisma db push
```

6. **Run development server**
```bash
pnpm dev
# or
npm run dev
```

7. **Open your browser**
```
http://localhost:3000
```

## 🔧 Environment Variables

Create a `.env.local` file in your project root:

```env
# Database
DATABASE_URL="your-neon-postgres-url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Vonage Video API
VONAGE_API_KEY="your-vonage-api-key"
VONAGE_API_SECRET="your-vonage-api-secret"

# Stripe (Optional)
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."

# Email Services (Optional)
RESEND_API_KEY="your-resend-api-key"

# File Storage (Optional)
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

## 📁 Project Structure

```
medimeet/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   │   ├── admin/         # Admin dashboard
│   │   ├── doctor/        # Doctor dashboard
│   │   ├── doctors/       # Doctor discovery
│   │   ├── appointments/  # Appointment management
│   │   └── onboarding/    # User onboarding
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.js          # Root layout
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   └── ...               # Custom components
├── lib/                   # Utility libraries
│   ├── prisma.js         # Database client
│   ├── schema.js         # Validation schemas
│   └── utils.js          # Helper functions
├── actions/               # Server actions
├── hooks/                 # Custom React hooks
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
└── public/               # Static assets
```

## 🔑 Key Components

### Authentication Flow
```javascript
// Role-based routing in middleware.js
const isProtectedRoute = createRouteMatcher([
  "/doctors(.*)",
  "/doctor(.*)",
  "/admin(.*)",
  "/appointments(.*)",
]);
```

### Database Schema
```prisma
model User {
  id               String   @id @default(cuid())
  clerkUserId      String   @unique
  email            String   @unique
  name             String?
  role             Role     @default(UNASSIGNED)
  credits          Int      @default(10)
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}

model Doctor {
  id                String   @id @default(cuid())
  userId            String   @unique
  specialty         String
  experience        Int
  verificationStatus VerificationStatus @default(PENDING)
  // ... more fields
}
```

### Video Call Integration
```javascript
// Vonage session management
const session = await vonage.video.createSession({
  mediaMode: "routed",
  archiveMode: "manual"
});
```

## 🧪 Testing

Run the test suite:
```bash
pnpm test
# or
npm test
```

## 📦 Build & Deployment

### Production Build
```bash
pnpm build
pnpm start
```

### Deploy to Vercel
```bash
vercel deploy
```

### Environment Variables for Production
Ensure all environment variables are set in your deployment platform.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** - For the beautiful component library
- **Vercel** - For seamless deployment
- **Clerk** - For robust authentication
- **Vonage** - For reliable video communication
- **Neon** - For serverless PostgreSQL

## 📞 Support

For support, email [your-email@domain.com] or join our Discord community.

## 🔗 Links

- **Live Demo**: [https://medimeet.vercel.app](https://medimeet.vercel.app)
- **Documentation**: [https://docs.medimeet.app](https://docs.medimeet.app)
- **API Reference**: [https://api.medimeet.app](https://api.medimeet.app)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/kartikeykatyal">Kartikey Katyal</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
