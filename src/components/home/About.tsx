'use client';
import React, { useEffect } from 'react';
import Container from '../utils/Container';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom'
    });
  }, []);
  return (
    <div className=" h-fit overflow-hidden">
      <Container className="py-12 font-semibold relative">
        <div>
          <h1 className="text-4xl uppercase">About us</h1>
        </div>
        <div className="flex items-center pt-10 max-md:flex-col md:gap-24 gap-6">
          <Image
            src="/images/rent_2.jpg"
            alt="hello"
            width={200}
            height={200}
            className="w-[200px] h-[200px] rounded-full"
            data-aos="fade-right"
          />
          <div className=" flex flex-col gap-4">
            <p data-aos="fade-left" data-aos-delay="200">
              Welcome to Anjana Inn, where comfort meets affordability for students and single
              professionals. Discover safe, convenient living spaces tailored to your needs. From
              single rooms to shared living arrangements, our flexible plans cater to daily,
              monthly, and yearly stays, all with essential amenities. Get in touch today and find
              your ideal living space with us.
            </p>

            <Link href="/plane" data-aos="fade-up" data-aos-delay="400">
              <Button className="bg-green-500 hover:bg-green-600 transition-all duration-75 active:scale-95 active:-translate-y-1">
                Stay with us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
