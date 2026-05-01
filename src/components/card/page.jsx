import { Button, Card, CloseButton } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const CardPage = ({book}) => {
  return (
    <div>
      {
        <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <Image
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={book.image_url}
          width="400"
          height="400"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{book.title}</Card.Title>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{book.author}</span>
          </div>
        </Card.Footer>
      </div>
    </Card>
      }
    </div>
  );
};

export default CardPage;