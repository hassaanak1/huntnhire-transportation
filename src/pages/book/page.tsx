import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import {
  Car,
  MapPin,
  User,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Phone,
  PartyPopper,
  Briefcase,
  Plane,
  Heart,
  CalendarDays,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils.ts";
import { ConvexError } from "convex/values";
import { usePageMeta } from "@/hooks/use-page-meta.ts";

const SERVICE_OPTIONS = [
  { value: "limo-service", label: "Limousine Service", icon: Car },
  { value: "party-bus", label: "Party Bus Rental", icon: PartyPopper },
  { value: "corporate", label: "Corporate Transportation", icon: Briefcase },
  { value: "airport-transfers", label: "Airport Transfer", icon: Plane },
  { value: "wedding", label: "Wedding Transportation", icon: Heart },
] as const;

const VEHICLE_OPTIONS = [
  { value: "executive-sedan", label: "Executive Sedan (up to 3)" },
  { value: "luxury-suv", label: "Luxury SUV (up to 6)" },
  { value: "stretch-limo", label: "Stretch Limousine (up to 10)" },
  { value: "white-stretch", label: "White Stretch Limo (up to 12)" },
  { value: "executive-van", label: "Executive Sprinter Van (up to 14)" },
  { value: "party-bus", label: "Party Bus (20-40)" },
  { value: "no-preference", label: "No Preference - Recommend for Me" },
] as const;

const TIME_SLOTS = [
  "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM",
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM",
] as const;

const STEPS = [
  { id: 1, label: "Service", icon: Car },
  { id: 2, label: "Details", icon: MapPin },
  { id: 3, label: "Your Info", icon: User },
  { id: 4, label: "Confirm", icon: CheckCircle },
] as const;

type BookingFormData = {
  serviceType: string;
  vehiclePreference: string;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  dropoffLocation: string;
  passengers: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
};

const INITIAL_FORM: BookingFormData = {
  serviceType: "",
  vehiclePreference: "",
  pickupDate: "",
  pickupTime: "",
  pickupLocation: "",
  dropoffLocation: "",
  passengers: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  specialRequests: "",
};

function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10">
      {STEPS.map((step, i) => (
        <div key={step.id} className="flex items-center">
          <div
            className={cn(
              "flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 border transition-all duration-300",
              currentStep === step.id
                ? "bg-primary text-primary-foreground border-primary"
                : currentStep > step.id
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "bg-card text-muted-foreground border-border",
            )}
          >
            <step.icon className="size-4" />
            <span className="text-xs uppercase tracking-wider font-medium hidden sm:inline">
              {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={cn(
                "w-4 sm:w-8 h-px transition-colors",
                currentStep > step.id ? "bg-primary" : "bg-border",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function Step1ServiceSelect({
  form,
  onChange,
}: {
  form: BookingFormData;
  onChange: (updates: Partial<BookingFormData>) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
        Select Your Service
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        Choose the type of service you need. We{"'"}ll match you with the
        perfect vehicle.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {SERVICE_OPTIONS.map((service) => (
          <button
            key={service.value}
            type="button"
            onClick={() => onChange({ serviceType: service.value })}
            className={cn(
              "flex items-center gap-4 p-5 border text-left transition-all duration-300",
              form.serviceType === service.value
                ? "bg-primary/10 border-primary text-foreground"
                : "bg-card border-border text-muted-foreground hover:border-primary/40",
            )}
          >
            <div
              className={cn(
                "w-11 h-11 flex items-center justify-center shrink-0 transition-colors",
                form.serviceType === service.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground",
              )}
            >
              <service.icon className="size-5" />
            </div>
            <span className="font-medium text-sm">{service.label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <Label>Vehicle Preference</Label>
        <Select
          value={form.vehiclePreference}
          onValueChange={(v) => onChange({ vehiclePreference: v })}
        >
          <SelectTrigger className="rounded-none bg-background">
            <SelectValue placeholder="Select a vehicle (optional)" />
          </SelectTrigger>
          <SelectContent>
            {VEHICLE_OPTIONS.map((v) => (
              <SelectItem key={v.value} value={v.value}>
                {v.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function Step2TripDetails({
  form,
  onChange,
}: {
  form: BookingFormData;
  onChange: (updates: Partial<BookingFormData>) => void;
}) {
  // Minimum date is today
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
        Trip Details
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        Tell us when and where you need to go.
      </p>
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="pickup-date">
              <CalendarDays className="size-4 inline mr-1.5 text-primary" />
              Pickup Date <span className="text-destructive">*</span>
            </Label>
            <Input
              id="pickup-date"
              type="date"
              min={today}
              value={form.pickupDate}
              onChange={(e) => onChange({ pickupDate: e.target.value })}
              required
              className="rounded-none bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label>
              Pickup Time <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.pickupTime}
              onValueChange={(v) => onChange({ pickupTime: v })}
            >
              <SelectTrigger className="rounded-none bg-background">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {TIME_SLOTS.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pickup-loc">
            <MapPin className="size-4 inline mr-1.5 text-primary" />
            Pickup Location <span className="text-destructive">*</span>
          </Label>
          <Input
            id="pickup-loc"
            placeholder="123 Main St, New York, NY or JFK Airport Terminal 4"
            value={form.pickupLocation}
            onChange={(e) => onChange({ pickupLocation: e.target.value })}
            required
            className="rounded-none bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dropoff-loc">
            <MapPin className="size-4 inline mr-1.5 text-primary" />
            Drop-off Location <span className="text-destructive">*</span>
          </Label>
          <Input
            id="dropoff-loc"
            placeholder="456 Park Ave, New York, NY or The Plaza Hotel"
            value={form.dropoffLocation}
            onChange={(e) => onChange({ dropoffLocation: e.target.value })}
            required
            className="rounded-none bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="passengers">
            <Users className="size-4 inline mr-1.5 text-primary" />
            Number of Passengers <span className="text-destructive">*</span>
          </Label>
          <Input
            id="passengers"
            type="number"
            min={1}
            max={40}
            value={form.passengers}
            onChange={(e) =>
              onChange({ passengers: parseInt(e.target.value) || 1 })
            }
            required
            className="rounded-none bg-background"
          />
        </div>
      </div>
    </div>
  );
}

function Step3ContactInfo({
  form,
  onChange,
}: {
  form: BookingFormData;
  onChange: (updates: Partial<BookingFormData>) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
        Your Information
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        How can we reach you to confirm your reservation?
      </p>
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="first-name">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="first-name"
              placeholder="John"
              value={form.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
              required
              className="rounded-none bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="last-name"
              placeholder="Smith"
              value={form.lastName}
              onChange={(e) => onChange({ lastName: e.target.value })}
              required
              className="rounded-none bg-background"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="booking-email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="booking-email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) => onChange({ email: e.target.value })}
              required
              className="rounded-none bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="booking-phone">
              Phone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="booking-phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              required
              className="rounded-none bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="special-req">Special Requests</Label>
          <Textarea
            id="special-req"
            placeholder="Child car seat needed, specific music, decorations, champagne preference..."
            rows={4}
            value={form.specialRequests}
            onChange={(e) => onChange({ specialRequests: e.target.value })}
            className="rounded-none bg-background resize-none"
          />
        </div>
      </div>
    </div>
  );
}

function Step4Confirmation({ form }: { form: BookingFormData }) {
  const serviceLabel =
    SERVICE_OPTIONS.find((s) => s.value === form.serviceType)?.label ??
    form.serviceType;
  const vehicleLabel =
    VEHICLE_OPTIONS.find((v) => v.value === form.vehiclePreference)?.label ??
    "No preference";

  const rows = [
    { label: "Service", value: serviceLabel },
    { label: "Vehicle", value: vehicleLabel },
    { label: "Date", value: form.pickupDate },
    { label: "Time", value: form.pickupTime },
    { label: "Pickup", value: form.pickupLocation },
    { label: "Drop-off", value: form.dropoffLocation },
    { label: "Passengers", value: String(form.passengers) },
    { label: "Name", value: `${form.firstName} ${form.lastName}` },
    { label: "Email", value: form.email },
    { label: "Phone", value: form.phone },
  ];

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
        Review Your Booking
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        Please confirm all details are correct before submitting.
      </p>
      <div className="bg-background border border-border divide-y divide-border">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-start justify-between py-3 px-5 gap-4"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground shrink-0">
              {row.label}
            </span>
            <span className="text-sm text-foreground font-medium text-right break-words">
              {row.value}
            </span>
          </div>
        ))}
        {form.specialRequests && (
          <div className="py-3 px-5">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Special Requests
            </span>
            <p className="text-sm text-foreground mt-1">
              {form.specialRequests}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function BookingSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16"
    >
      <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="size-10 text-primary" />
      </div>
      <h2 className="font-serif text-3xl font-bold text-foreground mb-3">
        Booking Request Submitted
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
        Thank you! Our team will review your request and contact you within the
        hour to confirm your reservation and provide a final quote.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/">
          <Button className="rounded-none uppercase tracking-wider text-xs font-semibold px-8">
            Return Home
          </Button>
        </Link>
        <a
          href="tel:+18887778989"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <Phone className="size-4" />
          (888) 777-8989
        </a>
      </div>
    </motion.div>
  );
}

export default function BookingPage() {
  usePageMeta({
    title: "Book Your Luxury Ride | Free Quote | Vortex Lmntirx",
    description:
      "Reserve your luxury limousine, party bus, or executive vehicle in minutes. No payment required upfront. Our team confirms availability within the hour. Serving 50+ US cities.",
    keywords:
      "book limo, reserve party bus, luxury transportation booking, limo quote, Vortex Lmntirx reservation",
  });

  const createBooking = useMutation(api.bookings.createBookingRequest);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<BookingFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateForm = (updates: Partial<BookingFormData>) => {
    setForm((prev) => ({ ...prev, ...updates }));
  };

  const validateStep = (s: number): boolean => {
    switch (s) {
      case 1:
        if (!form.serviceType) {
          toast.error("Please select a service type.");
          return false;
        }
        return true;
      case 2:
        if (
          !form.pickupDate ||
          !form.pickupTime ||
          !form.pickupLocation.trim() ||
          !form.dropoffLocation.trim()
        ) {
          toast.error("Please fill in all trip details.");
          return false;
        }
        return true;
      case 3:
        if (
          !form.firstName.trim() ||
          !form.lastName.trim() ||
          !form.email.trim() ||
          !form.phone.trim()
        ) {
          toast.error("Please fill in all contact information.");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await createBooking({
        serviceType: form.serviceType,
        vehiclePreference:
          form.vehiclePreference || undefined,
        pickupDate: form.pickupDate,
        pickupTime: form.pickupTime,
        pickupLocation: form.pickupLocation.trim(),
        dropoffLocation: form.dropoffLocation.trim(),
        passengers: form.passengers,
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        specialRequests: form.specialRequests.trim() || undefined,
      });
      setIsSubmitted(true);
      toast.success("Booking request submitted!");
    } catch (error) {
      if (error instanceof ConvexError) {
        const { message } = error.data as { code: string; message: string };
        toast.error(message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main>
        <section className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4">
            <BookingSuccess />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Reserve Your Ride
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Book Your <span className="text-primary">Luxury</span> Ride
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete the form below and our team will confirm your reservation
              within the hour. No obligation until confirmed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <StepIndicator currentStep={step} />

          <div className="bg-card border border-border p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <Step1ServiceSelect form={form} onChange={updateForm} />
                )}
                {step === 2 && (
                  <Step2TripDetails form={form} onChange={updateForm} />
                )}
                {step === 3 && (
                  <Step3ContactInfo form={form} onChange={updateForm} />
                )}
                {step === 4 && <Step4Confirmation form={form} />}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
              {step > 1 ? (
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  className="rounded-none text-muted-foreground hover:text-foreground uppercase tracking-wider text-xs font-semibold"
                >
                  <ChevronLeft className="size-4 mr-1" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  className="rounded-none uppercase tracking-wider text-xs font-semibold px-8"
                >
                  Continue
                  <ChevronRight className="size-4 ml-1" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="rounded-none uppercase tracking-wider text-xs font-semibold px-8"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                  <CheckCircle className="size-4 ml-2" />
                </Button>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            No payment required now. Our team will contact you with pricing and
            confirm availability.
          </p>
        </div>
      </section>
    </main>
  );
}
