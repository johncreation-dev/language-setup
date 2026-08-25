## 🌍 Translation Helper

Use the `useTransHelper` hook to access the translation function throughout
your React Native components.

## Usage

import React from 'react';

const LoginScreen = () => {
  const { trans } = useTransHelper();

  return (
    <AppText
      underline
      weight="bold"
      color={Colors.PRIMARY}
      onPress={() => openSmartLink(policy)}
    >
      {trans('login_register.privacy_policy')}
    </AppText>
  );
};
