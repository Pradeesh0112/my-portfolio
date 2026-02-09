"use client";

import React, { useRef, useState, useCallback, useMemo } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface TiltProps {
    children: React.ReactNode;
    className?: string;
    rotationFactor?: number;
    springConfig?: { stiffness: number; damping: number };
}

export const Tilt: React.FC<TiltProps> = ({
    children,
    className = "",
    rotationFactor = 15,
    springConfig = { stiffness: 150, damping: 20 }
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotationFactor, -rotationFactor]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotationFactor, rotationFactor]), springConfig);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`perspective-1000 ${className}`}
        >
            {children}
        </motion.div>
    );
};
