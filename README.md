
Also, your **Usage** TypeScript example isn't inside a code block, so GitHub renders it as normal text.

Use this complete corrected README:

``md
# 🌍 Translation Helper

Use the `useTransHelper` hook to access the translation function throughout
your React Native components.

## ✨ Key Features

- 🌍 **Multi-language Support**  
  Easily support multiple languages across your React Native application.

- 🔄 **Centralized Translation Management**  
  Keep translations organized and manage localized content from a central structure.

- 🧩 **Reusable Translation Helper**  
  Use the `useTransHelper` hook to access translations consistently across components.

- 🎨 **UI Component Integration**  
  Seamlessly integrate translated content with custom and reusable UI components.

- 📱 **Application-Wide Usage**  
  Access translations easily across different screens and components.

- 🔑 **Key-Based Translations**  
  Use structured translation keys instead of hardcoded text for better maintainability.

---

## 🚀 Usage

````tsx

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
````
### Why yours was displaying incorrectly

You had:

```md
## 🌍 Multiple Languages Example language files: 
```json {
"en": {"login_register": { "privacy_policy": "Privacy Policy" } },
"ta": { "login_register": { "privacy_policy": "தனியுரிமைக் கொள்கை" } }, 
"es": { "login_register": { "privacy_policy": "Política de privacidad" } }
}
```
The corrected version above will render properly on GitHub with **syntax highlighting**, separate code blocks, and properly formatted JSON.
