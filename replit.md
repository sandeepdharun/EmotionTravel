# Travel Destination React App

## Overview
A modern React application built with Vite, TypeScript, and Tailwind CSS for exploring travel destinations. Features include interactive destination cards, emotion-based recommendations, 3D visualizations with React Three Fiber, and integration with Supabase for data storage.

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: Tailwind CSS + Shadcn UI components
- **Routing**: React Router DOM
- **State Management**: React Context API + TanStack Query
- **3D Graphics**: React Three Fiber + React Three Drei
- **Backend**: Supabase (configured but using public keys)
- **Build Tool**: Vite with SWC for fast compilation

## Current State
✅ **Fully Configured for Replit**
- Dependencies installed with `--legacy-peer-deps` to resolve React Three Fiber conflicts
- Vite development server configured for port 5000 with host `0.0.0.0`
- Production build tested and working
- Deployment configuration set up for autoscale with static file serving

## Key Features
- Interactive destination exploration (Tamil Nadu, Kerala, Bangalore)
- Emotion-based travel recommendations
- 3D particle backgrounds and visualizations
- Responsive design with dark/light mode support
- Google Maps integration
- Dashboard with analytics
- Mobile-first responsive design

## Development Setup
- **Dev Command**: `npm run dev` - Runs on http://localhost:5000
- **Build Command**: `npm run build` - Creates production build in `dist/`
- **Deploy**: Configured for Replit autoscale deployment

## Dependencies Notes
- Uses `--legacy-peer-deps` flag due to React Three Fiber version conflicts
- All major UI components from Radix UI + Shadcn
- Supabase integration present but uses public keys (needs env config for production)

## Recent Changes (September 22, 2025)
- Configured Vite server for Replit (port 5000, host 0.0.0.0)
- Installed all dependencies with conflict resolution
- Set up production deployment configuration
- Verified build process works correctly