
import { GlowEffectButton } from "@/components/ui/glow-effect-demo";

interface FormSuccessProps {
  onReset: () => void;
}

export const FormSuccess = ({ onReset }: FormSuccessProps) => {
  return (
    <div className="text-center py-8">
      <h4 className="text-xl mb-4">Thanks! We'll reply within 24 hours.</h4>
      <GlowEffectButton 
        onClick={onReset}
        className="mt-4"
      >
        Send Another Message
      </GlowEffectButton>
    </div>
  );
};
