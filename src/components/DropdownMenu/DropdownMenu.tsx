import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiGlobeLine } from 'react-icons/ri';
import { RiMistFill } from 'react-icons/ri';
import { RiLock2Line } from 'react-icons/ri';
import { RiCheckboxCircleFill } from 'react-icons/ri';

interface DropdownMenuTriggerProps {
  className?: string;
  onClick: () => void;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <button
      ref={ref}
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
  ref?: React.RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  className,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
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
  selected?: boolean;
  children: React.ReactNode;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  selected,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'dropdown-menu__item flex cursor-pointer gap-[12px] rounded-sm p-[8px] text-left hover:bg-neutral-50 focus:outline focus:outline-indigo-200',
        selected && 'bg-neutral-50'
      )}
      {...props}
    >
      {children}
    </button>
  );
};

interface DropdownMenuProps {}

const DropdownMenu: React.FC<DropdownMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(true);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    width: 0,
  });

  useEffect(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    setMenuPosition({
      top: rect.height,
      width: rect.width,
    });
  }, []);

  useEffect(() => {
    if (!menuRef.current || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={clsx(
        'dropdown-menu',
        'relative w-[272px] self-start text-sm font-medium text-neutral-900'
      )}
    >
      <DropdownMenuTrigger
        ref={triggerRef}
        className={clsx('dropdown-menu__trigger', 'w-full')}
        onClick={() => setIsOpen(!isOpen)}
      />

      {
        <DropdownMenuContent
          className={clsx(
            'absolute z-1',
            'transition-[opacity,translate] duration-300 ease-[ease]',
            isOpen ? 'opacity-100' : 'opacity-0',
            isOpen ? 'translate-y-[4px]' : 'translate-y-[-10px]'
          )}
          style={{
            top: `${menuPosition.top}px`,
            width: `${menuPosition.width}px`,
          }}
        >
          <DropdownMenuItem>
            <RiGlobeLine className={clsx('size-[1lh] fill-neutral-900')} />
            <span className="grow">Public</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RiMistFill className={clsx('size-[1lh] fill-neutral-900')} />
            <span className="grow">Unlisted</span>
          </DropdownMenuItem>
          <DropdownMenuItem selected>
            <RiLock2Line className={clsx('size-[1lh] fill-neutral-900')} />
            <span className="grow">Private</span>
            <RiCheckboxCircleFill
              className={clsx('size-[1lh] fill-neutral-900')}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      }
    </div>
  );
};

export default DropdownMenu;
