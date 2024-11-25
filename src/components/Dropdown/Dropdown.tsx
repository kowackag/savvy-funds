import { useEffect, useRef, useState } from "react";
import clx from "classnames";

import { ChevronDown } from "@components/icons/ChevronDown";
import { useClickOutside } from "@hooks/useClickOutside";

type DropdownItem = {
	id: string;
	name?: string;
	image?: {
		url: string;
		alt: string;
	};
};

type Props = {
	selected: string;
	items: DropdownItem[];
	onSelect: (id: string) => void;
	className?: string;
};

export const Dropdown = ({ selected, onSelect, items, className }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [selectedItemId, setSelectedItemId] = useState<string | null>(
		selected || null,
	);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useClickOutside({
		ref: dropdownRef,
		handler: () => setIsOpen(false),
	});

	const handleChange = (item: DropdownItem) => {
		setSelectedItemId(item.id);
		onSelect(item.id);
		setIsOpen(false);
	};

	const handleKeyDownToSelect = (
		e: React.KeyboardEvent<HTMLLIElement>,
		item: DropdownItem,
	) => {
		e.preventDefault();
		if (e.key === "Enter") handleChange(item);
	};

	const selectedItem =
		items?.find((item) => item.id === selectedItemId) || null;

	return (
		<div
			className={clx(
				"relative my-2 rounded-[32px] border border-neutral40 bg-neutral00 px-5 py-2 leading-none shadow-[0px_6px_40px_0px_rgba(0,0,0,0.02)] outline-none",
				className,
			)}
			ref={dropdownRef}
		>
			<button
				className="flex w-full items-center justify-stretch gap-2 text-s text-neutral500"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle dropdown"
			>
				{selectedItem?.name && <p className="px-2">{selectedItem?.name}</p>}
				{selectedItem?.image?.url && (
					<img
						src={selectedItem.image.url}
						alt={selectedItem.image.alt}
						loading="lazy"
						className="me-2 h-8 w-8 grow object-cover"
					/>
				)}
				<ChevronDown />
			</button>
			{isOpen && items && (
				<ul
					className="absolute left-0 top-full mt-1 w-full border border-neutral40 bg-neutral00"
					role="listbox"
				>
					{items.map((item) => (
						<li
							key={item.id}
							role="option"
							className="px-6 py-4 text-center text-neutral500 transition-colors hover:cursor-pointer hover:bg-secondary01/5 hover:font-medium"
							onClick={() => handleChange(item)}
							onKeyDown={(e) => handleKeyDownToSelect(e, item)}
						>
							{item?.image?.url && (
								<img
									src={item.image.url}
									alt={item.image.alt}
									loading="lazy"
									className="me-2 h-8 w-8 object-cover"
								/>
							)}
							{item.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
