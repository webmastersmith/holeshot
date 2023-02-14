export default function Person5Image() {
  return (
    <img
      srcset="/testimonials/image5/image5_1-1_150x150.jpg 150w, /testimonials/image5/image5_1-1_300x300.jpg 300w"
      sizes="150px"
      src="/testimonials/image5/image5_1-1_150x150.jpg"
      alt="Image of person leaving a review"
      loading="lazy"
    />
  );
}
