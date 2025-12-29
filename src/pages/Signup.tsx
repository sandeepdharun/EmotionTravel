import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ArrowLeft, Sparkles, Mail, Lock, User, Chrome } from "lucide-react";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
});

const Signup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const validatedData = signupSchema.parse(formData);
      const { error: signUpError } = await supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.password,
        options: { data: { name: validatedData.name }, emailRedirectTo: `${window.location.origin}/` },
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
    <div className="min-h-screen bg-[#030712] text-slate-50 relative flex flex-col items-center justify-center p-6">
      <ParticleBackground theme="minimal" />

      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[550px] relative z-10">

        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              Start Your Journey
            </h1>
            <p className="text-slate-400 leading-relaxed">
              Share your details and we'll craft a travel experience that matches your emotions, rhythm, and dreams.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2 animate-fade-in">
              <Label htmlFor="name" className="text-xs uppercase tracking-widest text-slate-500 font-semibold ml-1">
                Full Name *
              </Label>
              <div className="relative flex items-center">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  id="name"
                  className="bg-white/[0.05] border-white/10 pl-10 h-12 focus:ring-primary/50 focus:ring-2 focus:border-primary/60 transition-all hover-scale"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 animate-fade-in">
              <Label htmlFor="email" className="text-xs uppercase tracking-widest text-slate-500 font-semibold ml-1">
                Email Address *
              </Label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  className="bg-white/[0.05] border-white/10 pl-10 h-12 focus:ring-primary/50 focus:ring-2 focus:border-primary/60 transition-all hover-scale"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Where should we send your journeys?"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 animate-fade-in">
              <Label htmlFor="password" className="text-xs uppercase tracking-widest text-slate-500 font-semibold ml-1">
                Password *
              </Label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  id="password"
                  type="password"
                  className="bg-white/[0.05] border-white/10 pl-10 h-12 focus:ring-primary/50 focus:ring-2 focus:border-primary/60 transition-all hover-scale"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a strong password"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-md font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            >
              {loading ? "Creating account..." : "Start My Journey"}
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0c0f17] px-4 text-slate-500 tracking-widest">or continue with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              disabled={googleLoading || loading}
              onClick={async () => {
                /* Google logic */
              }}
              className="w-full h-12 border-white/10 bg-transparent hover:bg-white/5 text-slate-300 rounded-xl transition-all"
            >
              {googleLoading ? (
                "Connecting..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Chrome className="w-4 h-4" /> Sign up with Google
                </span>
              )}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Join 10,000+ travelers already designing emotionally rich journeys.
          </p>

          <div className="mt-4 flex justify-center">
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
