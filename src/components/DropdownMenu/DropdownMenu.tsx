import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiGlobeLine } from 'react-icons/ri';
import { RiMistFill } from 'react-icons/ri';
import { RiLock2Line } from 'react-icons/ri';

interface DropdownMenuTriggerProps {
  className?: string;
  onClick: () => void;
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'button',
        'box-border flex h-[36px] cursor-pointer items-center justify-between rounded-sm border border-neutral-200 px-[12px] py-[8px] text-left text-neutral-900 shadow-sm',
        className
      )}
      {...props}
    >
      Privacy options
      <RiArrowDownSLine className={clsx('size-[1lh] fill-neutral-900')} />
    </button>
  );
};

interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'dropdown-menu__content',
        'flex flex-col items-stretch justify-start gap-[8px] rounded-lg bg-white p-[8px] shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface DropdownMenuItemProps {
  children: React.ReactNode;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  ...props
}) => {
  return (
    <div
      className={clsx('dropdown-menu__item flex gap-[12px] p-[8px]')}
      {...props}
    >
      {children}
    </div>
  );
};

interface DropdownMenuProps {}

const DropdownMenu: React.FC<DropdownMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  return (
    <div
      className={clsx(
        'dropdown-menu',
        'relative flex w-[272px] flex-col gap-[4px] text-sm'
      )}
    >
      <DropdownMenuTrigger
        ref={triggerRef}
        className={clsx('dropdown-menu__trigger')}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <DropdownMenuContent className={clsx('absolute')}>
          <DropdownMenuItem>
            <RiGlobeLine className={clsx('size-[1lh] fill-neutral-900')} />
            Public
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RiMistFill className={clsx('size-[1lh] fill-neutral-900')} />
            Unlisted
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RiLock2Line className={clsx('size-[1lh] fill-neutral-900')} />
            Private
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </div>
  );
};

export default DropdownMenu;
