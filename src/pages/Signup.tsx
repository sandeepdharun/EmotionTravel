import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ArrowLeft, Sparkles, Mail, Lock, User } from "lucide-react";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 18 && Number(val) <= 120, {
    message: "Age must be between 18 and 120",
  }),
  role: z.string().min(1, "Please tell us who you are"),
  otherRole: z.string().optional(),
}).refine((data) => {
  if (data.role === "Other" && (!data.otherRole || data.otherRole.trim().length === 0)) {
    return false;
  }
  return true;
}, {
  message: "Please specify who you are",
  path: ["otherRole"],
});

const Signup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    role: "",
    otherRole: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const validatedData = signupSchema.parse(formData);
      const { error: signUpError } = await supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.password,
        options: {
          data: {
            name: validatedData.name,
            age: validatedData.age,
            role: validatedData.role,
            otherRole: validatedData.role === 'Other' ? validatedData.otherRole : undefined
          },
          emailRedirectTo: `${window.location.origin}/`
        },
      });
      if (signUpError) throw signUpError;

      toast({ title: "Welcome aboard! ✨", description: "Check your email to confirm your journey." });
      setTimeout(() => navigate("/"), 2000);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 pt-24">
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 w-full h-full bg-[url('/travel-bg-2.png')] bg-cover bg-center -z-10">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </div>

      <div className="fixed inset-0 pointer-events-none -z-10">
        <ParticleBackground theme="minimal" />
      </div>

      <div className="w-full max-w-[500px] relative z-10 scale-95 origin-top">

        <div className="bg-slate-900/80 backdrop-blur-3xl border border-white/20 rounded-2xl p-6 shadow-2xl shadow-primary/10 ring-1 ring-white/10">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold tracking-tight mb-1 bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent flex items-center justify-center gap-2 drop-shadow-sm">
              <Sparkles className="w-5 h-5 text-sky-400" /> Start Your Journey
            </h1>
            <p className="text-slate-300 text-xs leading-relaxed max-w-[90%] mx-auto font-medium">
              Share your details and we'll craft a travel experience that matches your emotions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1 animate-fade-in">
              <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold ml-1">
                Full Name *
              </Label>
              <div className="relative flex items-center">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  id="name"
                  className="bg-white/[0.05] border-white/10 pl-10 h-10 text-sm focus:ring-primary/50 focus:ring-2 focus:border-primary/60 transition-all hover-scale"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 animate-fade-in">
              <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold ml-1">
                Email Address *
              </Label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  className="bg-white/[0.05] border-white/10 pl-10 h-10 text-sm focus:ring-primary/50 focus:ring-2 focus:border-primary/60 transition-all hover-scale"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Where should we send your journeys?"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 animate-fade-in">
              <Label htmlFor="password" className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold ml-1">
                Password *
              </Label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  id="password"
                  type="password"
                  className="bg-white/[0.05] border-white/10 pl-10 h-10 text-sm focus:ring-primary/50 focus:ring-2 focus:border-primary/60 transition-all hover-scale"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a strong password"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1 animate-fade-in">
                <Label htmlFor="age" className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold ml-1">
                  Age *
                </Label>
                <Input
                  id="age"
                  type="number"
                  className="bg-white/[0.05] border-white/10 h-10 text-sm focus:ring-primary/50 focus:ring-2 focus:border-primary/60 transition-all hover-scale"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="Your age"
                  required
                />
              </div>

              <div className="space-y-1 animate-fade-in">
                <Label htmlFor="role" className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold ml-1">
                  Who are you? *
                </Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                >
                  <SelectTrigger className="bg-white/[0.05] border-white/10 h-10 text-sm focus:ring-primary/50 focus:ring-2 focus:border-primary/60 transition-all hover-scale">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Working professional / Employee">Working professional / Employee</SelectItem>
                    <SelectItem value="Business owner / Entrepreneur">Business owner / Entrepreneur</SelectItem>
                    <SelectItem value="Freelancer / Self-employed">Freelancer / Self-employed</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {formData.role === "Other" && (
              <div className="space-y-1 animate-fade-in">
                <Label htmlFor="otherRole" className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold ml-1">
                  Tell us more *
                </Label>
                <Input
                  id="otherRole"
                  className="bg-white/[0.05] border-white/10 h-10 text-sm focus:ring-primary/50 focus:ring-2 focus:border-primary/60 transition-all hover-scale"
                  value={formData.otherRole}
                  onChange={(e) => setFormData({ ...formData, otherRole: e.target.value })}
                  placeholder="e.g. Traveler between jobs..."
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white h-9 text-sm font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-1"
            >
              {loading ? "Creating account..." : "Start My Journey"}
            </Button>
          </form>

          <p className="mt-3 text-center text-[10px] text-slate-500">
            Join 10,000+ travelers designing emotional journeys.
          </p>

          <div className="mt-2 flex justify-center">
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-xs h-8"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
