
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .slice(0, 1000); // Limit length
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validatePhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  return /^\+?[\d\s-()]{10,15}$/.test(phone);
};

export const validateName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 100;
};

export const validateMessage = (message: string): boolean => {
  return message.length >= 10 && message.length <= 1000;
};
