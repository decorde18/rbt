// ============================================
// components/ui/Card.jsx
// ============================================
// USAGE:
{
  /* <Card
  variant='elevated'
  header={<h3 className='font-bold text-lg'>Card Title</h3>}
  footer={<Button>Action</Button>}
>
  <p>Card content goes here</p>
</Card>; */
}

import { cn } from "@/lib/utils";
import { cardVariants, cardDefaults } from "@/lib/componentConfig";

const Card = ({
  variant = cardDefaults.variant,
  className,
  header,
  footer,
  children,
  ...props
}) => {
  const variantStyles = cardVariants.variant[variant];

  return (
    <div
      className={cn(cardDefaults.base, className)}
      style={{
        backgroundColor: variantStyles.bg,
        border: variantStyles.border,
        boxShadow: variantStyles.boxShadow,
        borderRadius: cardDefaults.borderRadius,
      }}
      {...props}
    >
      {header && (
        <div
          className='px-6 py-4'
          style={{ borderBottom: cardDefaults.headerBorder }}
        >
          {header}
        </div>
      )}

      <div className='px-6 py-4'>{children}</div>

      {footer && (
        <div
          className='px-6 py-4'
          style={{ borderTop: cardDefaults.footerBorder }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
