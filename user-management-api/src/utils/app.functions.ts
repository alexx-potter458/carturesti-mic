export const getUserIdFromRequest = (request: Request): number => {
  return (request as any).userId;
};

export const isPlainPasswordValid = (password: string): boolean => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/gm;

  return regex.test(password);
};

export const isEmailValid = (email: string): boolean => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

  return regex.test(email);
};
