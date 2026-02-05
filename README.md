# PhysioCare Portfolio

A modern, interactive website for a physiotherapist built with React.js (Vite) and Three.js.

## Project Structure

- **src/components**: Reusable UI components (Navbar, Footer, Scene).
- **src/pages**: Route components (Home, Services, Contact, Portfolio).
- **src/styles**: Global styles.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is optimized for deployment on Netlify.

1. **Connect to Netlify**:
   - Push this repository to GitHub/GitLab/Bitbucket.
   - Initialise a new site on Netlify and select the repo.

2. **Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

3. **Deploy**:
   - Click "Deploy Site".
   - Netlify will automatically build and deploy the React app.

## Customization

- Update `src/pages/Contact.jsx` with real contact details.
- Replace `src/components/Scene.jsx` with a custom 3D model if desired.
- Add actual images to `src/assets` and import them in components.
