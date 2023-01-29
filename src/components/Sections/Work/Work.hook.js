import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

const useWork = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: "/poro.riv",
    stateMachines: "state",
    autoplay: true,
  });

  const clickedInput = useStateMachineInput(rive, "state", "clicked", false);

  useEffect(() => {
    if (clickedInput) {
      clickedInput.value = buttonClicked;
    }
  }, [buttonClicked]);

  useEffect(() => {
    let timeoutId;
    timeoutId = setTimeout(() => {
      setButtonClicked(false);
    }, 3500);

    return () => {
      if (typeof timeoutId !== "undefined") {
        clearTimeout(timeoutId);
      }
    };
  }, [buttonClicked]);

  const work = [
    {
      title: "Authologic\nwebsite",
      description: "Coding website for\nwww.authologic.com",
      link: "/authologic",
      image: "/authologic.png",
    },
    {
      title: "Eye One\nwebsite",
      description: "Coding website for\nwww.eye.one",
      link: "/eye-one",
      image: "/eyeone.png",
    },
    {
      title: "Jaś Skorobohaty\nwebsite",
      description: "Coding website for\nwww.jas-skorobohaty.pl",
      link: "/jas",
      image: "/jas.png",
    },
    {
      title: "CURE\nMaja Smółko",
      description: "Logo and website design for beauty company",
      link: "/cure",
      image: "/cure.png",
    },
    {
      title: "Invoicer\nApp design for time tracking",
      description:
        "Simple app design for tracking time spent on projects.\nDesigned in light & dark mode.",
      link: "/invoicer",
      image: "/invoicer.png",
    },
    {
      title:
        "Happy solutions\nApp design for company time\nand holidays tracking",
      description: "Simple app design for tracking time spent on projects.",
      link: "/happy-solutions",
      image: "/happy-solutions.png",
    },
  ];

  return { work, RiveComponent, buttonClicked, setButtonClicked, clickedInput };
};

export default useWork;
