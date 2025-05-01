"use client";

interface FlyingItemProps {
  flyingItem: {
    id: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    image: string;
  } | null;
}

export default function FlyingProduct({ flyingItem }: FlyingItemProps) {
  if (!flyingItem) return null;

  return (
    <>
      <div className="flying-item fixed z-50 pointer-events-none">
        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl shadow-lg">
          {flyingItem.image}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fly {
          0% {
            transform: translate(
                ${flyingItem.startX - 25}px,
                ${flyingItem.startY - 25}px
              )
              scale(1);
            opacity: 1;
          }
          10% {
            transform: translate(
                ${flyingItem.startX - 25}px,
                ${flyingItem.startY - 25}px
              )
              scale(1.1);
            opacity: 1;
          }
          30% {
            transform: translate(
                ${flyingItem.startX -
                25 +
                (flyingItem.endX - flyingItem.startX) * 0.3}px,
                ${flyingItem.startY - 25 - 50}px
              )
              scale(0.9);
            opacity: 0.9;
          }
          60% {
            transform: translate(
                ${flyingItem.startX -
                25 +
                (flyingItem.endX - flyingItem.startX) * 0.6}px,
                ${flyingItem.startY -
                25 -
                30 +
                (flyingItem.endY - flyingItem.startY) * 0.5}px
              )
              scale(0.7);
            opacity: 0.8;
          }
          100% {
            transform: translate(
                ${flyingItem.endX - 25}px,
                ${flyingItem.endY - 25}px
              )
              scale(0.3);
            opacity: 0;
          }
        }

        .flying-item {
          animation: fly 0.8s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      `}</style>
    </>
  );
}
