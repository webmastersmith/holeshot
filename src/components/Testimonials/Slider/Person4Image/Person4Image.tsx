export default function Person4Image() {
  return (
    <img
      srcset="/testimonials/image4/image4_1-1_150x150.jpg 150w, /testimonials/image4/image4_1-1_300x300.jpg 300w"
      sizes="150px"
      src="/testimonials/image4/image4_1-1_150x150.jpg"
      alt="Image of person leaving a review"
      loading="lazy"
    />
  );
}
