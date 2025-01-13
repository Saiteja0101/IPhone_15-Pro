import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animateProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(
        firstTarget,{
            ...animateProps,
            ease: 'power2.inOut'
        },
        '<'
    )
    timeline.to(
        secondTarget,{
            ...animateProps,
            ease: 'power2.inOut'
        },
        '<'
    )
}

export const animateWithGsap = (target, animationprops, scrollProps) => {
    gsap.to(target, {
        ...animationprops,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 95%',
            ...scrollProps,
        }
    })
}