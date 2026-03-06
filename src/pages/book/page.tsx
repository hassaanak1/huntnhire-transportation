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
  Clock,
  GraduationCap,
  Music,
  Gem,
  Globe,
  MapPinPlus,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils.ts";
import { ConvexError } from "convex/values";
import { usePageMeta } from "@/hooks/use-page-meta.ts";

const EVENT_TYPES = [
  { value: "wedding", label: "Wedding", icon: Heart },
  { value: "prom", label: "Prom / Homecoming", icon: GraduationCap },
  { value: "birthday", label: "Birthday Party", icon: PartyPopper },
  { value: "bachelor-bachelorette", label: "Bachelor / Bachelorette", icon: Music },
  { value: "corporate", label: "Corporate Event", icon: Briefcase },
  { value: "airport-transfer", label: "Airport Transfer", icon: Plane },
  { value: "concert-sporting", label: "Concert / Sporting Event", icon: Gem },
  { value: "night-out", label: "Night Out", icon: Globe },
  { value: "other", label: "Other", icon: Car },
] as const;

const VEHICLE_OPTIONS = [
  { value: "stretch-limo", label: "Stretch Limousine" },
  { value: "party-bus", label: "Party Bus" },
  { value: "executive-sedan", label: "Executive Sedan" },
  { value: "luxury-suv", label: "Luxury SUV" },
  { value: "white-stretch", label: "White Stretch Limo" },
  { value: "executive-van", label: "Executive Sprinter Van" },
  { value: "hummer-limo", label: "Hummer Limousine" },
  { value: "charter-bus", label: "Charter / Mini Bus" },
  { value: "not-sure", label: "Not Sure - Recommend for Me" },
] as const;

const TIME_SLOTS = [
  "12:00 AM", "12:30 AM",
  "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM",
  "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM",
  "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM",
  "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM",
  "11:00 PM", "11:30 PM",
] as const;

const STEPS = [
  { id: 1, label: "Event", icon: CalendarDays },
  { id: 2, label: "Trip", icon: MapPin },
  { id: 3, label: "Your Info", icon: User },
  { id: 4, label: "Confirm", icon: CheckCircle },
] as const;

type BookingFormData = {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  pickupTime: string;
  pickupAddress: string;
  stopsAddress: string;
  destinationAddress: string;
  dropoffTime: string;
  passengers: number;
  hoursNeeded: number;
  vehicleNeeded: string;
  specialRequests: string;
};

const INITIAL_FORM: BookingFormData = {
  fullName: "",
  email: "",
  phone: "",
  eventDate: "",
  eventType: "",
  pickupTime: "",
  pickupAddress: "",
  stopsAddress: "",
  destinationAddress: "",
  dropoffTime: "",
  passengers: 1,
  hoursNeeded: 1,
  vehicleNeeded: "",
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

/* ────────────────────── Step 1: Event & Vehicle ────────────────────── */

function Step1EventVehicle({
  form,
  onChange,
}: {
  form: BookingFormData;
  onChange: (updates: Partial<BookingFormData>) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
        Event &amp; Vehicle
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        Tell us about your event and which vehicle you{"'"}d like.
      </p>

      {/* Event type grid */}
      <Label className="mb-3 block">
        Event Type <span className="text-destructive">*</span>
      </Label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {EVENT_TYPES.map((evt) => (
          <button
            key={evt.value}
            type="button"
            onClick={() => onChange({ eventType: evt.value })}
            className={cn(
              "flex items-center gap-3 p-4 border text-left transition-all duration-300",
              form.eventType === evt.value
                ? "bg-primary/10 border-primary text-foreground"
                : "bg-card border-border text-muted-foreground hover:border-primary/40",
            )}
          >
            <div
              className={cn(
                "w-9 h-9 flex items-center justify-center shrink-0 transition-colors",
                form.eventType === evt.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground",
              )}
            >
              <evt.icon className="size-4" />
            </div>
            <span className="font-medium text-xs sm:text-sm leading-tight">
              {evt.label}
            </span>
          </button>
        ))}
      </div>

      {/* Event date */}
      <div className="space-y-2 mb-6">
        <Label htmlFor="event-date">
          <CalendarDays className="size-4 inline mr-1.5 text-primary" />
          Event Date <span className="text-destructive">*</span>
        </Label>
        <Input
          id="event-date"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          value={form.eventDate}
          onChange={(e) => onChange({ eventDate: e.target.value })}
          required
          className="rounded-none bg-background"
        />
      </div>

      {/* Vehicle needed */}
      <div className="space-y-2 mb-6">
        <Label>
          Vehicle Needed <span className="text-destructive">*</span>
        </Label>
        <Select
          value={form.vehicleNeeded}
          onValueChange={(v) => onChange({ vehicleNeeded: v })}
        >
          <SelectTrigger className="rounded-none bg-background">
            <SelectValue placeholder="Select a vehicle" />
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

      {/* Passengers & Hours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="passengers">
            <Users className="size-4 inline mr-1.5 text-primary" />
            Number of Passengers <span className="text-destructive">*</span>
          </Label>
          <Input
            id="passengers"
            type="number"
            min={1}
            max={60}
            value={form.passengers}
            onChange={(e) =>
              onChange({ passengers: parseInt(e.target.value) || 1 })
            }
            required
            className="rounded-none bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="hours-needed">
            <Clock className="size-4 inline mr-1.5 text-primary" />
            Number of Hours <span className="text-destructive">*</span>
          </Label>
          <Input
            id="hours-needed"
            type="number"
            min={1}
            max={24}
            value={form.hoursNeeded}
            onChange={(e) =>
              onChange({ hoursNeeded: parseInt(e.target.value) || 1 })
            }
            required
            className="rounded-none bg-background"
          />
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Step 2: Trip Details ────────────────────── */

function Step2TripDetails({
  form,
  onChange,
}: {
  form: BookingFormData;
  onChange: (updates: Partial<BookingFormData>) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
        Trip Details
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        Provide your pickup, stops, destination, and schedule.
      </p>
      <div className="space-y-5">
        {/* Pickup time & Dropoff time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label>
              <Clock className="size-4 inline mr-1.5 text-primary" />
              Pickup Time <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.pickupTime}
              onValueChange={(v) => onChange({ pickupTime: v })}
            >
              <SelectTrigger className="rounded-none bg-background">
                <SelectValue placeholder="Select pickup time" />
              </SelectTrigger>
              <SelectContent>
                {TIME_SLOTS.map((t) => (
                  <SelectItem key={`pickup-${t}`} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>
              <Clock className="size-4 inline mr-1.5 text-primary" />
              Drop-off Time <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.dropoffTime}
              onValueChange={(v) => onChange({ dropoffTime: v })}
            >
              <SelectTrigger className="rounded-none bg-background">
                <SelectValue placeholder="Select drop-off time" />
              </SelectTrigger>
              <SelectContent>
                {TIME_SLOTS.map((t) => (
                  <SelectItem key={`dropoff-${t}`} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Pickup address */}
        <div className="space-y-2">
          <Label htmlFor="pickup-addr">
            <MapPin className="size-4 inline mr-1.5 text-primary" />
            Pickup Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="pickup-addr"
            placeholder="123 Main St, New York, NY 10001"
            value={form.pickupAddress}
            onChange={(e) => onChange({ pickupAddress: e.target.value })}
            required
            className="rounded-none bg-background"
          />
        </div>

        {/* Stops address */}
        <div className="space-y-2">
          <Label htmlFor="stops-addr">
            <MapPinPlus className="size-4 inline mr-1.5 text-primary" />
            Stops Address{" "}
            <span className="text-muted-foreground font-normal text-xs">
              (optional — separate multiple stops with commas)
            </span>
          </Label>
          <Textarea
            id="stops-addr"
            placeholder="456 Oak Ave, Brooklyn, NY 11201, 789 Elm St, Manhattan, NY 10019"
            rows={2}
            value={form.stopsAddress}
            onChange={(e) => onChange({ stopsAddress: e.target.value })}
            className="rounded-none bg-background resize-none"
          />
        </div>

        {/* Destination address */}
        <div className="space-y-2">
          <Label htmlFor="dest-addr">
            <MapPin className="size-4 inline mr-1.5 text-primary" />
            Destination Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="dest-addr"
            placeholder="The Plaza Hotel, 768 5th Ave, New York, NY 10019"
            value={form.destinationAddress}
            onChange={(e) => onChange({ destinationAddress: e.target.value })}
            required
            className="rounded-none bg-background"
          />
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Step 3: Personal Info ────────────────────── */

function Step3PersonalInfo({
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
        {/* Full name */}
        <div className="space-y-2">
          <Label htmlFor="full-name">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="full-name"
            placeholder="John Smith"
            value={form.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
            required
            className="rounded-none bg-background"
          />
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
              Phone Number <span className="text-destructive">*</span>
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
            placeholder="Child car seat, specific music, decorations, champagne, accessibility needs..."
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

/* ────────────────────── Step 4: Confirmation ────────────────────── */

function Step4Confirmation({ form }: { form: BookingFormData }) {
  const eventLabel =
    EVENT_TYPES.find((e) => e.value === form.eventType)?.label ?? form.eventType;
  const vehicleLabel =
    VEHICLE_OPTIONS.find((v) => v.value === form.vehicleNeeded)?.label ??
    form.vehicleNeeded;

  const rows = [
    { label: "Full Name", value: form.fullName },
    { label: "Email", value: form.email },
    { label: "Phone", value: form.phone },
    { label: "Event Type", value: eventLabel },
    { label: "Event Date", value: form.eventDate },
    { label: "Vehicle", value: vehicleLabel },
    { label: "Passengers", value: String(form.passengers) },
    { label: "Hours Needed", value: `${form.hoursNeeded} hour${form.hoursNeeded !== 1 ? "s" : ""}` },
    { label: "Pickup Time", value: form.pickupTime },
    { label: "Pickup Address", value: form.pickupAddress },
    { label: "Drop-off Time", value: form.dropoffTime },
    { label: "Destination", value: form.destinationAddress },
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
        {form.stopsAddress.trim() && (
          <div className="py-3 px-5">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Stops
            </span>
            <p className="text-sm text-foreground mt-1">{form.stopsAddress}</p>
          </div>
        )}
        {form.specialRequests.trim() && (
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

/* ────────────────────── Success ────────────────────── */

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
          href="tel:+12108019909"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <Phone className="size-4" />
          (210) 801-9909
        </a>
      </div>
    </motion.div>
  );
}

/* ────────────────────── Main Page ────────────────────── */

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
        if (!form.eventType) {
          toast.error("Please select an event type.");
          return false;
        }
        if (!form.eventDate) {
          toast.error("Please select an event date.");
          return false;
        }
        if (!form.vehicleNeeded) {
          toast.error("Please select a vehicle.");
          return false;
        }
        if (form.passengers < 1) {
          toast.error("At least 1 passenger is required.");
          return false;
        }
        return true;
      case 2:
        if (!form.pickupTime) {
          toast.error("Please select a pickup time.");
          return false;
        }
        if (!form.pickupAddress.trim()) {
          toast.error("Please enter a pickup address.");
          return false;
        }
        if (!form.destinationAddress.trim()) {
          toast.error("Please enter a destination address.");
          return false;
        }
        if (!form.dropoffTime) {
          toast.error("Please select a drop-off time.");
          return false;
        }
        return true;
      case 3:
        if (!form.fullName.trim()) {
          toast.error("Please enter your full name.");
          return false;
        }
        if (!form.email.trim()) {
          toast.error("Please enter your email.");
          return false;
        }
        if (!form.phone.trim()) {
          toast.error("Please enter your phone number.");
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
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        eventDate: form.eventDate,
        eventType: form.eventType,
        pickupTime: form.pickupTime,
        pickupAddress: form.pickupAddress.trim(),
        stopsAddress: form.stopsAddress.trim() || undefined,
        destinationAddress: form.destinationAddress.trim(),
        dropoffTime: form.dropoffTime,
        passengers: form.passengers,
        hoursNeeded: form.hoursNeeded,
        vehicleNeeded: form.vehicleNeeded,
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
                  <Step1EventVehicle form={form} onChange={updateForm} />
                )}
                {step === 2 && (
                  <Step2TripDetails form={form} onChange={updateForm} />
                )}
                {step === 3 && (
                  <Step3PersonalInfo form={form} onChange={updateForm} />
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
