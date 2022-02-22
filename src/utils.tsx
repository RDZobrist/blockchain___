export const a11yProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

export const timeout = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};
export const validateEmail = (email: string):any => {
  let validAccount = email.split('@')[1] === 'hexagonwireless.com';
      
      return validAccount;
}   